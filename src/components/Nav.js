import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Nav = () => {
  const [links, setLinks] = useState(['daily', 'weekly', 'monthly']);
  return (
    <div className="nav">
      {links.map(link => (
        <Link to={`/${link}`} style={{ textDecoration: 'none' }} key={link}>
          <Button variant="contained">{`${link} Todos`}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
