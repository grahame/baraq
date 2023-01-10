import React from "react";
import { Container } from "reactstrap";
import { bookReference } from "../hebrew/words";
import { CardProps } from "../components/CardProvider";

export const Worksheet: React.FC<CardProps> = ({ words }) => {
    return (
        <Container>
            <table className="worksheet table">
                <tbody>
                    {words.map((word, i) => (
                        <tr key={i} className="d-flex print-row-definition">
                            <td className="col-7"></td>
                            <td className="text-right col-3">
                                {word.forms.map((form, i) => (
                                    <div key={i} className="biblical-hebrew display-4">
                                        {form}
                                    </div>
                                ))}
                            </td>
                            <td className="col-2">
                                {bookReference(word)}. {word.definition}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Worksheet;
