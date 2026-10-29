import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../Components/Common/Header";
import { Footer } from "../Components/Common/Footer";


export default function RootLayout({ children }: LayoutProps<"/">) {
return (
<>
<Header logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
<main>{children}</main>
<Footer/>
</>
);
}
