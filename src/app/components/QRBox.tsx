import Image from "next/image";


export default function QRBox() {
    return (
        <div className="bg-white rounded-[20px] shadow-xl m-auto p-4 w-[288px]">
            <div>
                <Image className="rounded-[10px]" src="/image-qr-code.png" width={288} height={288} alt="qr code image"></Image>
            </div>
            <div className="mt-6 font-bold text-[21px] text-center text-[#1f314f]">Improve your front-end skills by building projects</div>
            <div className="mb-4 mt-4 px-3 text-[15px] text-center text-[#7d889e]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
    )
}