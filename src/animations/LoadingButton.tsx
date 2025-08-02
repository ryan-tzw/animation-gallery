import { FiLoader } from 'react-icons/fi'

export function LoadingButton() {
    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2 px-6 py-4 bg-indigo-500 rounded-full"
                disabled
            >
                <FiLoader className="w-5 h-5 text-indigo-100 animate-spin" />
                <span className="text-indigo-100">Loading...</span>
            </button>
        </>
    )
}
