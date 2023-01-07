import BasicHead from "@components/ordinary/Head";
import DefaultLayout from "@layouts/Default";
import Container from "@components/simple/Container";


const ShoppingCartPage = () => {
    return (
        <>
            <BasicHead title={'Shopping Cart page'} />
            <DefaultLayout>
                <Container>
                    Shopping Cart
                </Container>
            </DefaultLayout>
        </>
    );
};

export default ShoppingCartPage;