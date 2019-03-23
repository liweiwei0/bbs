package fun.lww.bbs.dao;

import fun.lww.bbs.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {

    User findByEmailAndPassword(String email, String password);

    User findByNameOrEmail(String name, String email);
}
