import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "../store/products/productsSlice";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../components/ecommmerce";
import { useParams } from "react-router-dom";
import Loading from "../components/feedback/loading/Loading";



export default function Categories() {
  const params = useParams();
  const dispatch = useAppDispatch()
  const { records, loading, error } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string))
    return () => {
      dispatch(productsCleanUp())
    }

  }, [dispatch,params.prefix])

  const productsList = records.length > 0 ? records.map((record) => {
    return <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Product {...record} />
    </Col>
  }) : "There are no Products"
  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>
          {productsList}
        </Row>
      </Loading>
    </Container>
  )
}
