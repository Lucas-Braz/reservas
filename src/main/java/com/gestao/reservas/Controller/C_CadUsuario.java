package com.gestao.reservas.Controller;

import com.gestao.reservas.Model.M_Usuario;
import com.gestao.reservas.Service.S_Usuario;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_CadUsuario {

    @GetMapping("/cadastro/usuario")
    public String getCadastro(HttpServletRequest request){
        if(request.getHeader("Referer") != null) {
            return "cadastros/usuario";
        }else{
            return "redirect:/";
        }
    }

    @PostMapping("/cadastro/usuario")
    @ResponseBody
    public String cadastrarUsuario(@RequestParam("nome") String nome,
                                   @RequestParam("email") String email,
                                   @RequestParam("matricula") String matricula,
                                   @RequestParam("cargo") String cargo){
        return S_Usuario.cadastrarUsuario(nome,matricula,cargo,email);
    }

    @GetMapping("/edit/usuario")
    public String getEditUsuario(HttpServletRequest request,
                                    HttpSession session){
        if(request.getHeader("Referer") != null){
            M_Usuario usuario = (M_Usuario) session.getAttribute("usuario");
            if(usuario.getCargo() == 1){
                return "viewAdemir";
            }else{
                return "Prefessor";
            }

        }else{
            return null;
        }
    }
}
