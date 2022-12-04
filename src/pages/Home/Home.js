import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Home.module.css';
import { getAllUsers } from '../../api/UsersApi';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const carregarUsers = async () => {
        try {
            setIsLoading(true);
            const result = await getAllUsers(10, 0);
            setUsers(result.data);
            setIsLoading(false);
        } catch (error) {
            return error;
        }
    };

    const reduzirData = texto => {
        const result = texto.split('T')[0];
        return result;
    };

    useEffect(() => {
        carregarUsers();
    }, []);

    return (
        <div>
            <NavBar />
            <div className={`${styles.content}`}>
                {isLoading ? (
                    'Carregando...'
                ) : (
                    <>
                        {users &&
                            users.map(user => (
                                <div key={user.id}>
                                    <div className={styles.userItem}>
                                        <li>
                                            <span className={styles.label}>name:</span>
                                            <span className={styles.contentUser}>{user.name}</span>
                                        </li>
                                        <li>
                                            <span className={styles.label}>LastName:</span>
                                            <span className={styles.contentUser}>{user.lastName}</span>
                                        </li>
                                        <li>
                                            <span className={styles.label}>email:</span>
                                            <span className={styles.contentUser}>{user.email}</span>
                                        </li>
                                        <li>
                                            <span className={styles.label}>CreateAt:</span>
                                            <span className={styles.contentUser}>{reduzirData(user.createAt)}</span>
                                            {/* <span className={styles.contentUser}>{(user.createAt)}</span> */}
                                        </li>
                                        <li>
                                            <span className={styles.label}>CPF:</span>
                                            <span className={styles.contentUser}>{user.cpf}</span>
                                        </li>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
