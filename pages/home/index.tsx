import BasicHead from "../../components/ordinary/Head";
import DefaultLayout from "../../layouts/Default";
import Container from "@components/simple/Container";
import Product from "@components/ordinary/Product";

const HomePage = () => {
    return (
        <>
            <BasicHead title={'Home page'} />
            <DefaultLayout>
                <Container>
                    <Product />
                </Container>
            </DefaultLayout>
        </>
    );
};

export default HomePage;