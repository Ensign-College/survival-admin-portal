import React, { useEffect, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import EditForm from "../components/forms/EditForm";
import PreviewForm from "../components/forms/PreviewForm";

interface PreviewModalProps {
  card: Card | null;
  supabase?: SupabaseClient;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  card,
  supabase,
  onClose,
}) => {
  console.log("card from PreviewModal: ", card?.title);
  const [localCard, setLocalCard] = useState<Card | null>(card);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  useEffect(() => {
    if (card?.id) {
      supabase
        ?.from("card_details")
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

  // console.log("card: ", card?.title);
  return (
    <div className="modal-overlay">
      <div className="bg-white w-full lg:w-2/3 m-8 p-8 rounded-xl ">
        {card && (
          <div>
            <div className="flex justify-between mb-4">
              <button
                onClick={onClose}
                className="modal-close-icon text-red-600 hover-bg-red-100 rounded"
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
              <h2 className="text-2xl font-semibold">{card?.title}</h2>
            <img src={card.image_logo} alt={card.title} className="w-32 h-32" />
            <p className="mb-4">{card.card_detail_text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewModal;
