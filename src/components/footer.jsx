
export default function Footer() {

    return (
        <>
        <footer className="w-full h-48 flex flex-col items-center justify-center gap-6 bg-zinc-800">
            <div className="w-full flex items-center justify-center gap-5 text-3xl text-white">
                <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="mail-outline"></ion-icon></a>
            </div>
            <p className="text-white">© 2025 Goddess. Todos os direitos reservados.</p>
        </footer>
        </>
    )
}