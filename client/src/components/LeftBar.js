import Input from "./Input"
import Logo from "../assets/images/Logo.png"
import Wrapper from "../assets/Wrappers/LeftBar.js"
const LeftBar = () => {
    return (
        <Wrapper>
            <div className="logo">
                <img src={Logo} alt="Logo"></img>
            </div>

            <div className="search">
                <form className="form">
                    <h1>Search</h1>
                    <div className="form-center">
                        <Input type='text' name='CityName'></Input>
                        <Input
                            type='text'
                            name='search'
                        // value={search}
                        // onChange={handleSearch}
                        ></Input>
                    </div>
                </form>
            </div>


        </Wrapper>
    )
}
export default LeftBar