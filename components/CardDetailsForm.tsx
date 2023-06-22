import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

type CardDetail = {
  title: string;
  details: string;
  picture: string;
  id?: number;
  card_id?: number;
};

type Props = {
  onNewCardDetail: (cardDetail: CardDetail) => void;
};

const CardDetailsForm: React.FC<Props> = ({ onNewCardDetail }) => {
  const [newDetailTitle, setNewDetailTitle] = useState('');
  const [newDetailText, setNewDetailText] = useState('');
  const [newDetailImageUrl, setNewDetailImageUrl] = useState('');
  const [newDetailCardId, setNewDetailCardId] = useState('');

  const handleAddCardDetail = (e: FormEvent) => {
    e.preventDefault();
    const newCardDetail: CardDetail = {
      title: newDetailTitle,
      details: newDetailText,
      picture: newDetailImageUrl,
      card_id: parseInt(newDetailCardId)
    };

    axios.post<CardDetail>('http://192.168.169.106:8000/CardDetails', newCardDetail)
      .then(response => {
        onNewCardDetail(response.data);
      });
  };

  return (
    <form onSubmit={handleAddCardDetail}>
      <input
        type="text"
        placeholder="Detail Title"
        value={newDetailTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDetailTitle(e.target.value)}
      />
      <textarea
        placeholder="Details"
        value={newDetailText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewDetailText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newDetailImageUrl}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDetailImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card ID"
        value={newDetailCardId}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDetailCardId(e.target.value)}
      />
      <button type="submit">Add Card Detail</button>
    </form>
  );
};

export default CardDetailsForm;

