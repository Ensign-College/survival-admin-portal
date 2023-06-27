import { createClient, SupabaseClient } from '@supabase/supabase-js';
import supabase from "./supabaseClient";

export const fetchCard = async (id: number) => {
    const { data, error } = await supabase.from('card').select().eq('id', id).single();
    if (error) {
        console.error('Error fetching card:', error);
        return null;
    }
    return data;
};

export const updateCard = async (id: number, cardData: {
    title: string,
    image_logo: string,
    card_detail_id: number,
    card_detail_text: string,
    card_detail_pictures: string[]
}) => {
    const { error } = await supabase.from('card').update(cardData).eq('id', id);
    if (error) {
        console.error('Error updating card:', error);
        return null;
    }
    return cardData;
};

export const fetchCards = async () => {
    const { data, error } = await supabase.from('card').select();
    if (error) {
        console.error('Error fetching cards:', error);
        return [];
    }
    return data || [];
};

export const deleteCard = async (id: number) => {
    const { error } = await supabase.from('card').delete().match({ id });
    if (error) {
        console.error('Error deleting card:', error);
        return false;
    }
    return true;
};

export const createCard = async (cardData: {
    title: string,
    image_logo: string,
    card_detail_id: number,
    card_detail_text: string,
    card_detail_pictures: string[]
}) => {
    const { title, image_logo, card_detail_id, card_detail_text, card_detail_pictures } = cardData;

    // Inserting card
    const cardResponse = await supabase.from('card').insert([{ title, image_logo }]);
    const firstCard = cardResponse.data ? cardResponse.data[0] : null;
    const cardError = cardResponse.error;

    if (cardError || !firstCard) {
        console.error('Error inserting new card:', cardError);
        return null;
    }

    // Inserting card details
    const newCardDetails = {
        title, // Use the same title for card details
        pictures: card_detail_pictures,
        card_id: firstCard.id,
        text: card_detail_text
    };

    const cardDetailResponse = await supabase.from('card_details').insert([newCardDetails]);
    const firstCardDetail = cardDetailResponse.data ? cardDetailResponse.data[0] : null;
    const cardDetailError = cardDetailResponse.error;

    if (cardDetailError || !firstCardDetail) {
        console.error('Error inserting new card details:', cardDetailError);
        return null;
    }

    return { ...firstCard, card_details: firstCardDetail };
};
