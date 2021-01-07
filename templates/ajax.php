<?php if (isset($_POST['text'])) : ?>
    <?php echo $_POST['text']; ?>
<?php else : ?>

    <h2 id='textChange'>Ajax</h2>
    <input type='text' id='newText'><br>
    <button type='button' onclick='changeText()'>Change Content</button>

<?php endif; ?>
