import { useEffect , useState} from "react";
import '../SideBar/SidebarDrawer.css';


export default function Sample() {
    const [isParagraphHidden, setIsParagraphHidden] = useState(true);

    useEffect(() => {
        const checkWindowHeight = () => {
            if (window.innerHeight > 500) {
                setIsParagraphHidden(false);
            } else {
                setIsParagraphHidden(true);
            }
        };

        // Add a window resize event listener
        window.addEventListener('resize', checkWindowHeight);

        // Initial check when the component mounts
        checkWindowHeight();

       // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', checkWindowHeight);
    }, []);
        useEffect(() => {
            console.log('isParagraphHidden:', isParagraphHidden);
        }, []); // Log the state when it changes


    return (
        <div>
        {!isParagraphHidden && 
            <div>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit enim incidunt veniam possimus modi? Sapiente, qui obcaecati? Quibusdam, deleniti? Necessitatibus quo asperiores accusamus quisquam molestias, distinctio dicta ipsam id blanditiis minima hic exercitationem impedit dolor tenetur odit facere mollitia vel similique recusandae inventore dolorum quis. Ipsam molestiae sunt suscipit voluptates, tempore quas incidunt, cupiditate quaerat illum, autem quia quos accusamus. Iure necessitatibus sunt aperiam quibusdam consectetur et expedita cum nobis, repellat, temporibus veritatis quo rem beatae ab illum id voluptatibus impedit sequi harum tempore nulla sit eligendi esse? Vitae incidunt reprehenderit, aliquid animi nihil dolore vel. Quae distinctio pariatur ea.</p>
                <div className="h-40"></div>
            </div>
        }
        </div>
    );
}