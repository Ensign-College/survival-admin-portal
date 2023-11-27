import { SupabaseClient } from "@supabase/supabase-js";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import EditForm from "../components/forms/EditForm";

interface EditModalProps {
  card: Card | null;
  supabase: SupabaseClient;
  onClose: () => void;
  onSubmit: (id: number) => void;
  onUpdate: (updatedCard: Card) => void; // Add this line
}

const EditModal: React.FC<EditModalProps> = ({
  card,
  supabase,
  onClose,
  onSubmit,
  onUpdate,
}) => {
  console.log("card: ", card?.title);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [localCard, setLocalCard] = useState<Card | null>(card);

  useEffect(() => {
    if (card?.id) {
      supabase
        .from("card_details")
        .select()
        .eq("card_id", card.id)
        .single()
        .then(({ data }) => {
          setCardDetails(data);
        });
    }
  }, [card]);

  useEffect(() => {
    if (card && cardDetails) {
      setLocalCard({
        ...card,
        card_detail_text: cardDetails.text,
        card_detail_pictures: cardDetails.pictures.join(","),
      });
    }
  }, [card, cardDetails]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localCard) {
      // Update card in Supabase
      const { error: cardError } = await supabase
        .from("card")
        .update({
          title: localCard.title,
          image_logo: localCard.image_logo,
          card_detail_id: localCard.card_detail_id,
          last_edited: new Date(), // update the last_edited timestamp
        })
        .eq("id", localCard.id);

      if (cardError) {
        console.error("An error occurred while updating card:", cardError);
      } else {
        console.log("Card updated successfully");
      }
      let cardDetailPicturesArray: string[] = [];

      if (localCard.card_detail_pictures) {
        // Split the comma-separated string into an array
        cardDetailPicturesArray = localCard.card_detail_pictures
          .split(",")
          .map((s) => s.trim());
      }

      // Update card details in Supabase
      const { data: updatedCardDetails, error: cardDetailsError } =
        await supabase
          .from("card_details")
          .update({
            text: localCard.card_detail_text,
            pictures: cardDetailPicturesArray,
            // ... other fields ...
          })
          .eq("card_id", localCard.id);

      if (cardDetailsError) {
        console.error(
          "An error occurred while updating card details:",
          cardDetailsError
        );
      } else {
        setCardDetails(updatedCardDetails);
        onUpdate(localCard);
        console.log("Card details updated successfully");
      }
    }
    onClose();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (localCard) {
      const { name, value } = e.target;
      setLocalCard({ ...localCard, [name]: value });
    }
  };

  const handleDeleteImage = (imageUrl: string) => {
    if (localCard) {
      const cardDetailPicturesArray = localCard.card_detail_pictures.split(",");
      const newCardDetailPictures = cardDetailPicturesArray
        .filter((url: string) => url !== imageUrl)
        .join(",");
      setLocalCard({
        ...localCard,
        card_detail_pictures: newCardDetailPictures,
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="bg-white w-full lg:w-2/3 m-8 p-8 rounded-xl">
        <div className="flex flex-row-reverse justify-between mb-4">
          <button
            onClick={onClose}
            className="modal-close-icon text-red-600 hover:bg-red-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-2xl font-semibold">Edit Card</h2>
        </div>
        {localCard && (
          <EditForm
            localCard={localCard}
            onSubmit={handleSubmit}
            handleChange={handleChange}
            handleDeleteImage={handleDeleteImage}
          />
        )}
      </div>
    </div>
  );
};

export default EditModal;
