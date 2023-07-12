import { FiBold, FiItalic, FiCode } from "react-icons/fi";

interface ToolbarProps {
    onBold: () => void;
    onItalic: () => void;
    onCode: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onBold, onItalic, onCode }) => {
    return (
        <div className="flex space-x-2">
            <button onClick={onBold}>
                <FiBold />
            </button>
            <button onClick={onItalic}>
                <FiItalic />
            </button>
            <button onClick={onCode}>
                <FiCode />
            </button>
        </div>
    );
};

export default Toolbar;
