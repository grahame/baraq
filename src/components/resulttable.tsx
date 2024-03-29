import React from "react";
import { Table } from "reactstrap";
import { bookReference } from "../hebrew/words";
import { faTimesCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Result } from "../pages/Flash";

const ResultTable: React.FC<{ results: Result[] }> = ({ results }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>Word</th>
                    <th></th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>
                {results.map(([correct, word], i) => (
                    <tr key={i}>
                        <td className="col-1 text-right">
                            {correct ? (
                                <FontAwesomeIcon color="green" icon={faCheckSquare} />
                            ) : (
                                <FontAwesomeIcon color="red" icon={faTimesCircle} />
                            )}
                        </td>
                        <td className="col-1">{bookReference(word)}</td>
                        <td className="text-right">
                            {word.forms.map((form, i) => (
                                <div key={i} className="biblical-hebrew">
                                    {form}
                                </div>
                            ))}
                        </td>
                        <td>{word.definition}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ResultTable;
