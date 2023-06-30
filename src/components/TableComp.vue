<template>
    <tbody>
        <tr>
          <td>{{data.id}}</td>
          <td>{{data.catergory}}</td>
          <td>{{data.Image}}</td>
          <td>{{data.name}}</td>
          <td>{{data.price}}</td>
          <td>{{data.quantity}}</td>
          <td>
            <button onclick="editObject(${data.id})" id="edit-${data.id}">Edit</button>
            <button onclick="deleteObject(this)">Delete</button>
          </td>
        </tr>
      </tbody>
</template>

<script>
export default {
    props: ["products"]

}
</script>
<style>
</style>