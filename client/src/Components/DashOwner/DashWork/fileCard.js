import React from 'react';
import {Card} from 'react-bootstrap';

function FileCard({file}) {

  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`/uploads/${file.name}`} />
  <Card.Body>
    <Card.Title>
    {file.name}
    </Card.Title>
  </Card.Body>
</Card>
    </div>
  )
}

export default FileCard