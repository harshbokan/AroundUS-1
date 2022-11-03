import Wrapper from "../assets/Wrappers/RightBar"
const RightBar = () => {
    return (
        <Wrapper>
            <div className="nav">
                <button className="btn">Add shop</button>
            </div>
            <div className="list">
                <h2>Shops around You</h2>
                <div>
                    List Of Shops
                </div>
            </div>

        </Wrapper>

    )
}
export default RightBar