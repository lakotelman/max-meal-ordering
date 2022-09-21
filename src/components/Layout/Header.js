import styles from "./Header.module.css"
import mealsImage from "../../assets/banquetsetup.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = props => { 
return (
    <>
<header className={styles.header}>
<h1>Dinin'</h1>
<HeaderCartButton onClick={props.onShowCart}/>
</header>
<div className={styles["main-image"]}><img src={mealsImage} alt="A table with delicious food"/></div>
    </>
)
}

export default Header