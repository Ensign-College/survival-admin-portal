import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchCard, updateCard } from '../services/cardAPI';

const EditCardPage = () => {
    const [form, setForm] = useState({
        title: '',
        image_logo: '',
        card_detail_id: 0,
        card_detail_text: '',
        card_detail_pictures: ''
    });

    const router = useRouter();
    const { id } = router.query; // get card id from URL

    useEffect(() => {
        const fetchExistingCard = async () => {
            if (id) {
                const card = await fetchCard(Number(id));
                if (card) {
                    setForm({
                        title: card.title,
                        image_logo: card.image_logo,
                        card_detail_id: card.card_detail_id,
                        card_detail_text: card.card_detail_text,
                        card_detail_pictures: card.card_detail_pictures.join(',')
                    });
                }
            }
        };
        fetchExistingCard();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedCard = await updateCard(Number(id), form);
        if (updatedCard) {
            router.push('/'); // Navigate back to the homepage
        }
    };

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-4xl">Edit Card</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    {/* Similar form fields as in CardForm.tsx */}
                    {/* For example, for title: */}
                    <label className="block mb-2 text-sm font-bold text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Add other fields here */}
            </form>
        </div>
    );
};
};

export default EditCardPage;
