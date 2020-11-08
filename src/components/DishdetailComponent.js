import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

    function RenderComments({ comments }) {
        comments = comments.map((comment) => {
            return (
                <div>
                    <li key={comment.id}>{comment.comment}</li>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }

    function RenderDish({ dish }) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const Dishdetail = (props) => {
        if (props.dish == null) {
            return <div></div>
        } else {
            return (
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.dish.comments} />
                </div>
            );
        }
    }

export default Dishdetail;