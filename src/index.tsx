import { render } from "@react-email/render";
import PogMail from "../emails/PogMail";

const html = render(<PogMail />, { 
    pretty: true
});

console.log(html);
