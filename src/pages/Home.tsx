import React, { Component, ComponentProps } from "react";
import { Label, Form, Button, ButtonGroup, Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FlashOptions } from "../cards";
import Tasks from "../hebrew/tasks";

class Home extends Component<any, any> {
    constructor(props: ComponentProps<any>) {
        super(props);
        this.state = {
            task: Tasks[0].slug(),
            options: FlashOptions.FirstToLast,
        };
        this.formToState = this.formToState.bind(this);
    }

    formToState(event: any) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value,
        });
    }

    taskLink() {
        return `/quiz/${this.state.task}/${this.state.options}/`;
    }

    worksheetLink() {
        return `/worksheet/${this.state.task}/${this.state.options}/`;
    }

    render() {
        return (
            <div>
                <Container>
                    <Col lg={{ offset: 3, size: 6 }} md={{ offset: 2, size: 8 }}>
                        <h1 className="text-center biblical-hebrew">בָּרַק</h1>
                        <p>
                            This webpage has been created as a resource for students of Biblical Hebrew. The word list
                            is taken from{" "}
                            <a href="https://yalebooks.yale.edu/book/9780300222647/biblical-hebrew-second-ed-text-and-workbook">
                                Biblical Hebrew, Second Ed. (Text and Workbook)
                            </a>{" "}
                            by Bonnie Pedrotti Kittel, Victoria Hoffer, and Rebecca Abts Wright; Fully revised by
                            Victoria Hoffer. Thanks to Victoria Hoffer for her kind permission to use the word list on
                            this site.
                        </p>
                        <p>
                            Hebrew text is shown using the{" "}
                            <a href="https://www.sbl-site.org/educational/BiblicalFonts_SBLHebrew.aspx">
                                Society of Biblical Literature Hebrew font
                            </a>
                            .
                        </p>
                        <p>
                            Developed by <a href="mailto:grahame@bowland.au">Grahame Bowland</a>, while a student at{" "}
                            <a href="http://www.wtc.perth.anglican.org/">Wollaston Theological College</a>. Please get
                            in touch you encounter any issues, or spot any transcription errors in the word list.
                        </p>
                        <Form>
                            <Label for="task">Task:</Label>
                            <select
                                className="form-control"
                                id="task"
                                value={this.state.task}
                                onChange={this.formToState}
                            >
                                {Tasks.filter((t) => t.words().length > 0).map((task, idx) => (
                                    <option key={idx} value={task.slug()}>
                                        {task.description()}
                                    </option>
                                ))}
                            </select>
                            <Label for="options">Options:</Label>
                            <select
                                className="form-control"
                                id="options"
                                value={this.state.options}
                                onChange={this.formToState}
                            >
                                <option value={FlashOptions.FirstToLast}>First to Last</option>
                                <option value={FlashOptions.LastToFirst}>Last to First</option>
                                <option value={FlashOptions.Shuffle}>Shuffle</option>
                                <option value={FlashOptions.Sorted}>Sorted</option>
                            </select>
                            <ButtonGroup className="w-100">
                                <Button
                                    className="col-4 mt-2 mr-2"
                                    color="secondary"
                                    tag={Link}
                                    to={this.worksheetLink()}
                                >
                                    Print worksheet
                                </Button>
                                <Button className="col-4 mt-2" color="primary" tag={Link} to={this.taskLink()}>
                                    Start quiz!
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Home;
