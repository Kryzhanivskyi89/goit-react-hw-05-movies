import { Dna } from 'react-loader-spinner';

 function Loader () {
    return (
            <Dna
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="loading"
                wrapperStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    margin: '0 auto',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '9999',
                }}
                wrapperClass=""
                visible={true}
            />
    );
}

export default Loader