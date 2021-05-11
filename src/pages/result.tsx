import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import useStyles from '~styles/result-style';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import App from '~components/layouts/App';
import ListTournaments from '~components/views/ListTournaments';

function Result() {
    const classes = useStyles();
    const router = useRouter();
    const { search_query } = router.query;

    return (
        <div>
            <Head>
                <title>{search_query ? decodeURIComponent(search_query as string) : 'No Result Found'} | Inamen</title>
            </Head>
            <Container maxWidth="lg" className={classes.containerFilter}>
                <Button startIcon={<FilterListIcon />}>Filter</Button>
            </Container>
            <Container maxWidth="lg" className={classes.containerList} disableGutters>
                <ListTournaments />
            </Container>
        </div>
    );
}

Result.XLayout = App;

export default Result;
