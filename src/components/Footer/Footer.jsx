import FooterBody from "./FooterBody";
import FooterContact from "./FooterContact";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
    return(
        <div className="footer">
            <FooterContact />
            <FooterBody />
            <FooterCopyRight />
        </div>
    )
}
export default Footer;