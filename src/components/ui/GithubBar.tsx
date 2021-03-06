import React from "react";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { StyleSheet, css } from "aphrodite";

async function fetchRepos() {
  const response = await (
    await fetch(
      "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
    )
  ).json();
  return response;
}

function GithubBar(): JSX.Element {
  const { status, data, error } = useQuery("github-repos", fetchRepos);
  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error}</div>;
  return (
    <React.Fragment>
      <h2 className={css(styles.header)}>Github Repositories</h2>
      <Card>
        <Card.Body>
          <div>
            <div className={css(styles.subCards)}>
              {data.map((e: any, index: any) => (
                <React.Fragment key={index}>
                  <Card.Body>
                    <Card.Title>{e.full_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {e.description}
                    </Card.Subtitle>
                    <Card.Text>
                      {" "}
                      <span aria-label="forks" role="img">
                        🍴
                      </span>{" "}
                      Forks:{e.forks_count}{" "}
                      <span aria-label="watchers" role="img">
                        👁
                      </span>{" "}
                      Watchers:{e.watchers}{" "}
                      <span aria-label="language" role="img">
                        💻
                      </span>{" "}
                      Language: {e.language}
                    </Card.Text>
                    <Card.Link href={e.html_url}>Repository</Card.Link>
                  </Card.Body>
                </React.Fragment>
              ))}
            </div>
            <br />
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: "1vh",
  },
  subCards: {
    overflow: "auto",
    maxHeight: 400,
  },
});

export default GithubBar;
