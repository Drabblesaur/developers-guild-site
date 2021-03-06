import React from "react";
import { Table } from "react-bootstrap";
import Container from "../ui/Shared/Container";
import "../styles/image-headers.css";
import ContactHeader from "../graphic-assets/contact.jpg";
import { StyleSheet, css } from "aphrodite";

export const Contact: React.FC = () => (
  <React.Fragment>
    <br />
    <div className={css(styles.containerOne)}>
      <Container type="normal">
        <h4>Contact The Developers' Guild</h4>
        <p className="text-justify">
          Here are different ways to contact the Developers' Guild.
        </p>
      </Container>
      <img
        className="open-source-header lazyload"
        style={{ width: "30vw", alignSelf: "center" }}
        data-src={ContactHeader}
        alt="Header"
      />
      <Container type="normal">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td colSpan={2}>
                <strong>Contact Methods</strong>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:developersguildclub@gmail.com">
                  developersguildclub@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Github</td>
              <td>
                <a href="https://github.com/DevelopersGuild">
                  https://github.com/DevelopersGuild
                </a>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>
                {" "}
                <a href="https://www.facebook.com/officialdevelopersguild/">
                  https://www.facebook.com/officialdevelopersguild
                </a>
              </td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>
                <a href="https://www.instagram.com/da.devguild/">
                  https://www.instagram.com/da.devguild
                </a>
              </td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>
                <a href="https://medium.com/@developersguild">
                  https://medium.com/@developersguild
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <strong>Advisors</strong>
              </td>
            </tr>
            <tr>
              <td>Ronald Kleinman</td>
              <td>
                <a href="mailto:kleinmanronald@deanza.edu">
                  kleinmanronald@deanza.edu
                </a>
              </td>
            </tr>
            <tr>
              <td>Delia Garbacea</td>
              <td>
                <a href="mailto:GarbaceaDelia@deanza.edu">
                  GarbaceaDelia@deanza.edu
                </a>{" "}
                or <a href="tel:408-864-8308">408-864-8308</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  </React.Fragment>
);

const styles = StyleSheet.create({
  containerOne: { display: "flex", flexDirection: "column" },
});
