import Card from "./Card";

const CardList = (props) => {
    const phones = props.phonesData;
    return (
        <div>
            {
                phones.map((phone) => 
                <Card url={phone.urls.small} name={phone.user.username} />
                )
            }
        </div>
    )
}

export default CardList;