import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st;
		
		int N = Integer.parseInt(br.readLine()); // 명령의 수
		Stack<Integer> stack = new Stack<Integer>();
		
		for(int i=0;i<N;i++) {
			st = new StringTokenizer(br.readLine());
			int n = Integer.parseInt(st.nextToken()); // 입력된 명령

			switch(n) {
				case 1:
					stack.push(Integer.parseInt(st.nextToken()));
					break;
				case 2:
					if(stack.empty()) {
						bw.write(-1+"\n");
					}else {
						bw.write(stack.pop()+"\n");
					}
					break;
				case 3:
					bw.write(stack.size() + "\n");
					break;
				case 4:
					if(stack.empty()) {
						bw.write(1 + "\n");
					}else {
						bw.write(0 + "\n");
					}
					break;
				case 5:
					if(!stack.empty()) {
						bw.write(stack.peek() + "\n");
					}else {
						bw.write(-1 + "\n");
					}
					break;
			}
		}
		bw.flush();
	}
}
