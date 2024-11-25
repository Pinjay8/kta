import Logo from "../../../public/img/img_logo.svg";

export default function ApplicationLogo(props) {
    return (
        <div className="flex justify-center items-center w-100">
            <img src={Logo} className="h-24" alt="logo" />
        </div>
    );
}
