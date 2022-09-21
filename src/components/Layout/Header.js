import styles from "./Header.module.css"
import mealsImage from "../../assets/banquetsetup.jpg"

const Header = props => { 
return (
    <>
<header className={styles.header}>
<h1>Dinin'</h1>
<button>Cart</button>
</header>
<div className={styles["main-image"]}><img src={mealsImage} alt="A table with delicious food"/></div>
    </>
)
}

export default Header