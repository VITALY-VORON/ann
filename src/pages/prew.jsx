import logo from "../assets/Ellipse1.png"

const Prew = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-around",
        }}>
            <div style={{
                display: "flex",
                marginLeft: "auto",
                alignItems: "center",
                gap: 50,
                paddingRight: 10
            }}>
            </div>
            <div style={{
                backgroundColor: "pink",
                height: 200,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={logo} alt='fds' style={{
                    position: "absolute",
                    top: "-150%",
                    left: "10%",
                }} />
                <span style={{
                    fontSize: 30,
                    fontWeight: 400,
                    color: "white",
                    textTransform: "uppercase"
                }}>Счастье - это возможность 
                <p>видеть прекрасное</p></span>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 100
            }}>
                <button style={{
                    padding: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
                    borderRadius: 999,
                    border: "none",
                    backgroundColor: "pink"
                }}>Доставка</button>
                <button style={{
                    padding: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
                    borderRadius: 999,
                    border: "none",
                    backgroundColor: "pink"
                }}>Самовывоз</button>
            </div>
        </div>
    )
}

export default Prew