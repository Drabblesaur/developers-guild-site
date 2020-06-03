import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const GithubBarRaw: React.FC = () => {

    const [repos, setRepos] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const abortController = new AbortController();
            const signal = abortController.signal;
            const response = await (await fetch('https://api.github.com/orgs/DevelopersGuild/repos?sort=updated', { signal })).json();
            setRepos(response);
            return function cleanup() {
                abortController.abort();
            }
        })();
    }, []);

    return (
        <React.Fragment>
            <h5>Github Repositories</h5>
            <Card>
                <Card.Body>
                    <div>
                        <div style={{ overflow: 'auto', maxHeight: 400 }}>
                            {repos.map((e, index) => (
                                <React.Fragment key={index}>
                                    <Card.Body>
                                        <Card.Title>{e.full_name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{e.description}</Card.Subtitle>
                                        <Card.Text> {" "}
                                            <span aria-label="forks" role="img">🍴</span> {" "} Forks:{e.forks_count} {" "}
                                            <span aria-label="watchers" role="img">👁</span> {" "} Watchers:{e.watchers} {" "}
                                            <span aria-label="language" role="img">💻</span> {" "} Language: {e.language}
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
};

/**
 * Memoizing component to prevent useless re-rendering
 */
const GithubBar = React.memo(GithubBarRaw);

export default GithubBar;