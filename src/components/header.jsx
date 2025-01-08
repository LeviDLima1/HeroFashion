import logo from '../assets/logo.jpg';
export default function Header() {
    return (
        <>
        <header className="flex justify-around md:justify-between items-center p-6 border-b-4 border-b-red-200 shadow-lg
        md:p-3 bg-white
        ">
            <div className="flex gap-5">
                <div>
                    <figure>
                        <img src={logo} alt="" className='w-20 h-20 md:w-32 md:h-32' />
                    </figure>
                    
                
                </div>
                
                <nav className="hidden">
                    <ul className="flex justify-around gap-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-5">
                <p className='text-2xl'><ion-icon name="search-outline" class='text-black'></ion-icon></p>
                
                <input type="text" placeholder="Search..." className="rounded-lg"/>
            </div>
        </header>
        </>
    )
} 