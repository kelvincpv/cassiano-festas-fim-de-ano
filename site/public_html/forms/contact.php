<?php 
    
    require("./phpmailer/PHPMailer.php");
    require("./phpmailer/SMTP.php");

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $mail = new PHPMailer\PHPMailer\PHPMailer();

        $mail->IsSMTP();
        $mail->Host = "mail.k2server.com.br";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = '';
        $mail->Port = 587;
        $mail->Username = 'hotsmaster@k2server.com.br';
        $mail->Password = 'k2m*2020';
        $mail->From = "hotsmaster@k2server.com.br";
        $mail->FromName = "Contato Site";
        $mail->CharSet="UTF-8"; 
        $mail->IsHTML(true);

        $name = addslashes($_POST['name']);
        $phone = addslashes($_POST['cel']);
        $email = addslashes($_POST['email']);
        $suject = addslashes($_POST['subject']);
        $message = addslashes($_POST['message']);

        $mail->AddAddress('rodrigo.chediek@goldentulip.com.br');
        $mail->Subject = "Cassiano - Contato Site";

        $mail->Body = ("<table>
            <tr>
                <td><b>Nome:</b></td>
                <td>{$name}</td>
            </tr>
            <tr>
                <td><b>E-mail:</b></td>
                <td>{$email}</td>
            </tr>
            <tr>
                <td><b>Telefone:</b></td>
                <td>{$phone}</td>
            </tr>
            <tr>
                <td><b>Assunto:</b></td>
                <td>{$suject}</td>
            </tr>
            <tr>
                <td><b>Mensagem:</b></td>
                <td>{$message}</td>
            </tr>
        </table>");

        $enviado = $mail->Send();
        $mail->ClearAllRecipients();
        $mail->ClearAttachments();

        if($enviado){
            echo "<script>alert('Contato enviado, responderemos em breve!');</script>";
            echo "<script>location='index'</script>";

        }else{
            echo "<script>alert('Falha no envio! Tente novamente.');</script>";
            echo "<script>window.history.back();</script>";
        };

    }else{
        echo "<script>window.location.href = 'https://cassianorestaurante.com.br/index';</script>";
    }
    exit;

?>