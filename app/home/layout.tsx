import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderAuth } from "../Components/Common/HeaderAuth";

export default function Layout({ children }:LayoutProps<"/">) {
return (
<>
<HeaderAuth/>
<main>{children}</main>
</>
);
}
