import BasicHead from "../../components/ordinary/Head";
import DefaultLayout from "../../layouts/Default";
import Container from "@components/simple/Container";
import Products from "@components/ordinary/Products";

const HomePage = () =>
    <>
        <BasicHead title={'Home page'}/>
        <DefaultLayout>
            <Container>
                <Products />
            </Container>
        </DefaultLayout>
    </>
;

export default HomePage;