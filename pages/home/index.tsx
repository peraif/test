import BasicHead from "../../components/ordinary/Head";
import DefaultLayout from "../../layouts/Default";
import Container from "@components/simple/Container";
import Products from "@components/ordinary/Products";
import PageTitle from "@components/simple/PageTitle";

const HomePage = () =>
    <>
        <BasicHead title={'Home page'}/>
        <DefaultLayout>
            <Container>
                <PageTitle>All Products</PageTitle>
                <Products />
            </Container>
        </DefaultLayout>
    </>
;

export default HomePage;