import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { getUser } from "../../service/user";
import useMountedRef from "../../hooks/useMountedRef";
import { handleError } from "../../utils/Error";

interface IUserData {
  phone: string;
  username: string;
  name: string;
}

const Home = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [users, setUsers] = React.useState<IUserData[]>([]);
  const mountedRef = useMountedRef();

  React.useEffect(() => {
    try {
      (async () => {
        const users = await getUser();
        setUsers(users.data);
        console.log(users);
      })();
    } catch (e: any) {
      handleError(e);
    } finally {
      if (mountedRef.current) {
        setIsLoaded(true);
      }
    }
  }, []);
  return (
    <div className="base_wrapper">
      {isLoaded && users.length > 0 ? (
        users.map(user => (
          <div className="mt-5x" onClick={ ()=>alert("sadsad")}>
          <Card variant="outlined">
          <CardHeader
                avatar={<Avatar aria-label="recipe">{user.name}</Avatar>}
            action={<IconButton aria-label="settings"></IconButton>}
            title={user.name}
            subheader={user.username}
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
              { user.phone + user.username}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
            </Card>
            </div>
        ))
        
      ) : null}
    </div>
  );
};

export default Home;
