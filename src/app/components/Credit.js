import { Expand } from 'lucide-react';

const Credit = () => {
    return (
        <div className="flex justify-center pt-4 gap-2 text-light-gray text-sm"> {/* Optional: Add some padding to separate from children */}
            <Expand width={20} height={20} /><p className="font-noto-sans text-light-gray">inspired by reysu</p>
        </div>
    );
};

export default Credit;