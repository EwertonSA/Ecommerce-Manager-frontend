import { HeaderAuth } from "@/src/Components/Common/HeaderAuth";
import "../../src/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Layout({ children }:LayoutProps<"/">) {
return (
<>
<HeaderAuth/>
<main>{children}</main>
</>
);
}
