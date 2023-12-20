import NavMitra from "../components/mitra/NavMitra";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../App.css"

export default function OrderMitra() {
  return (
    <>
      <NavMitra />
      <section id="order">
        <Container>
          <Row className="py-3">
            <Col md={12}>
              <h4>Order</h4>
            </Col>
          </Row>
          <Row className="border rounded pt-4 shadow-sm bg-body" fluid>
            <Col md={12} className="py-4 px-3 border-top">
              <Table bordered hover className="text-center m-0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Mitra</th>
                    <th>Layanan</th>
                    <th>Biaya</th>
                    <th>Pengguna</th>
                    <th>Estimasi</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tukang</td>
                    <td>Rp. 1.000.000,-</td>
                    <td>Cat Tembok</td>
                    <td>Anton</td>
                    <td>1 Hari</td>
                    <td>21 Desember 2023</td>
                    <td>Proses</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
