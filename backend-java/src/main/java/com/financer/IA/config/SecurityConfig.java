package com.financer.IA.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      http
              .authorizeHttpRequests(authz ->authz
                      .requestMatchers("/health", "/transactions").permitAll()
                      .anyRequest().authenticated()
              )
              .csrf(csrf -> csrf.disable())
              .httpBasic(httpBasic ->{});

      return http.build();


    }

}
