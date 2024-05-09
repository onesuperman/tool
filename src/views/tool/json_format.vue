<template>
    <div>
        <div class="container"  style="margin-top: 1em;">
			<h2>JSON格式化</h2>
			<div class="row">
				<div class="col-sm-6">
					<textarea class="form-control" id="json-input" style="height: 500px;" ></textarea>
				</div>
				<div class="col-sm-6">
					<pre id="json-renderer" style="height:500px;"></pre>
				</div>
			</div>
			<div class="row">
				<div class="form-group" style="padding: 1em 0;">
					<button id="json-formatter" class="btn btn-info" title="run jsonViewer()">转换Json数据</button>
					<label class="checkbox-inline">
						<input type="checkbox" id="collapsed">收缩所有的节点 
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" id="with-quotes">为Key添加双引号 
					</label>
				</div>
			</div>
		</div>
    </div> 
</template>
<script>
import $ from 'jquery'
export default {
    data() {
      return {
        
      };
    },
    created(){
        $(function() {
		  $('#json-formatter').click(()=>{
			this.jsonFormatter();
		  });
		  $('#collapsed').change(() =>{
		  	this.jsonFormatter();
		  });
		  $('#with-quotes').change(() =>{
		  	this.jsonFormatter();
		  });
		});
    },
    computed: {
        
    },
    methods: {
        jsonFormatter(){
			try {
			  var input = eval('(' + $('#json-input').val() + ')');
			}
			catch (error) {
			  return alert("Cannot eval JSON: " + error);
			}
			var options = {
			  collapsed: $('#collapsed').is(':checked'),
			  withQuotes: $('#with-quotes').is(':checked')
			};
			$('#json-renderer').jsonViewer(input, options);
		}
    }
  }
</script>
<style>
</style>