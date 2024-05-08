import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetCategories } from "../store/categories/categoriesSlices";
import { Col, Container, Row } from "react-bootstrap";
import { Category } from "../components/ecommmerce";
import Loading from "../components/feedback/loading/Loading";

export default function Categories() {

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.categories)

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories())
    }
  }, [dispatch, records])

  const categoriesList = records.length > 0 ? records.map(record =>
    <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Category {...record} />
    </Col>

  ) : "There are no categories"
  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>
          {categoriesList}
        </Row>
      </Loading>
    </Container>
  )
}
