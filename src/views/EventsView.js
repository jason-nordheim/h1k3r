import React, { useState } from 'react'
import { MobileLayout } from "../components/layout/DefaultLayout";
import { Paper, Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions } from '@material-ui/core'
import { CustomTab, CustomTabs } from '../components/CustomTabs'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { AuthenticationContext } from '../components/AuthenticationContext';
import AddIcon from "@material-ui/icons/Add";


export const MobileEventsView = props => {
  const [tab, setTab] = useState(0)
  return (
    <MobileLayout>
      <AuthenticationContext.Consumer>
        {(value) => {
          const { state, signIn, signOut, register } = value;
          const user = { 
            first: "Jason", 
            last: "Nordheim", 
          }
          const event = {
            title: 'Hiking at the lake', 
            date: new Date(2020, 8, 20).toDateString(), 
            description: "Lets all get together and go hiking around the lake!"
          }
          return (
            <Paper square>
              <CustomTabs
                value={tab}
                onChange={(event, newValue) => setTab(newValue)}
                variant="fullWidth"
                indicatorColor={"green"}
              >
                <CustomTab label="My Events" />
                <CustomTab label="Invites" />
                <CustomTab icon={<AddIcon />} />
              </CustomTabs>
              <EventCard user={user} event={event} />
            </Paper>
          );
        }}
      </AuthenticationContext.Consumer>
    </MobileLayout>
  );
}


const EventCard = ({ user, event}) => {
  return (
    <Card>
      <CardHeader 
        avatar={<Avatar>{user.first.charAt(0) + user.last.charAt(0)}</Avatar>} 
        action={ <IconButton><MoreVertIcon /></IconButton>}
        title={event.title}
        subheader={event.date}
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {event.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon /> 
        </IconButton>
      </CardActions>
    </Card>
  )
}