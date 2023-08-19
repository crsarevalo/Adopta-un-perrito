import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Tags = ({ txt, colorBg }) => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge bg={colorBg}>{txt}</Badge>
      </Stack>
    </>
  );
};

export default Tags;
